let ExcelJS = null;

const loadExcelJS = async () => {
  if (!ExcelJS) {
    const module = await import("exceljs");
    ExcelJS = module.default;
  }
  return ExcelJS;
};

const validateExcelFile = async (file) => {
  if (!file.name.endsWith(".xlsx")) {
    throw new Error(`Invalid file format: "${file.name}". Please select only .xlsx files.`);
  }

  try {
    const Excel = await loadExcelJS();
    const arrayBuffer = await file.arrayBuffer();
    const workbook = new Excel.Workbook();
    await workbook.xlsx.load(arrayBuffer);

    if (workbook.worksheets.length > 1) {
      throw new Error(`File "${file.name}" contains ${workbook.worksheets.length} worksheets. Only files with a single worksheet are supported.`);
    }

    if (workbook.worksheets.length === 0) {
      throw new Error(`File "${file.name}" contains no worksheets.`);
    }

    return true;
  } catch (error) {
    if (error.message.includes("worksheets")) {
      throw error;
    }
    throw new Error(`Unable to read "${file.name}". Please ensure it's a valid Excel file.`);
  }
};

export const processExcelFiles = async (files, setStatus, setIsProcessing) => {
  setIsProcessing(true);
  setStatus("Loading ExcelJS...");

  try {
    const Excel = await loadExcelJS();

    setStatus("Validating files...");

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setStatus(`Validating file ${i + 1} of ${files.length}: ${file.name}`);
      await validateExcelFile(file);
    }

    const workbook = new Excel.Workbook();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setStatus(`Processing file ${i + 1} of ${files.length}: ${file.name}`);

      const arrayBuffer = await file.arrayBuffer();
      const sourceWorkbook = new Excel.Workbook();
      await sourceWorkbook.xlsx.load(arrayBuffer);

      const worksheet = sourceWorkbook.worksheets[0];
      if (worksheet) {
        const worksheetName = file.name
          .replace(/\.xlsx$/i, "")
          .replace(/[[\]*/\\?:]/g, "_")
          .slice(0, 31);

        const newWorksheet = workbook.addWorksheet(worksheetName);

        worksheet.eachRow((row, rowNumber) => {
          const newRow = newWorksheet.getRow(rowNumber);
          row.eachCell((cell, colNumber) => {
            newRow.getCell(colNumber).value = cell.value;
            newRow.getCell(colNumber).style = cell.style;
          });
          newRow.commit();
        });

        worksheet.columns.forEach((col, index) => {
          if (col.width) {
            newWorksheet.getColumn(index + 1).width = col.width;
          }
        });
      }
    }

    setStatus("Creating merged file...");
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "merged_workbooks.xlsx";
    link.click();
    window.URL.revokeObjectURL(url);

    setStatus("Merge completed successfully!");
  } catch (error) {
    setStatus(`Error: ${error.message}`);
    console.error("Error processing files:", error);
  } finally {
    setIsProcessing(false);
  }
};
