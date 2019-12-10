// Use ES6/7 code
const doGet = () => {
  const html = HtmlService.createTemplateFromFile("main");
  return html.evaluate().setTitle("TEST!");
};

const uuid = () => {
  return Utilities.getUuid();
};

const onOpen = () => {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
    .createMenu("Custom scripts")
    .addItem("Edit sheets [sample React project]", "openDialog")
    .addItem("About me", "openAboutSidebar")
    .addToUi();
};

const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile("main")
    .setWidth(400)
    .setHeight(600);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
    .showModalDialog(html, "Sheet Editor");
};

const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile("about");
  SpreadsheetApp.getUi().showSidebar(html);
};

const getSheets = () => SpreadsheetApp.getActiveSpreadsheet().getSheets();

const getActiveSheetName = () =>
  SpreadsheetApp.getActiveSpreadsheet().getSheetName();

const getSheetsData = () => {
  const activeSheetName = getActiveSheetName();
  return getSheets().map((sheet, index) => {
    const sheetName = sheet.getName();
    return {
      text: sheetName,
      sheetIndex: index,
      isActive: sheetName === activeSheetName
    };
  });
};

const getSheetByNameData = sheetName => {
  return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(sheetName)
    .getDataRange()
    .getValues()
    .map((data, index) => {
      return {
        data: data,
        index: index
      };
    });
};

const addSheet = sheetTitle => {
  SpreadsheetApp.getActiveSpreadsheet().insertSheet(sheetTitle);
  return getSheetsData();
};

const deleteSheet = sheetIndex => {
  const sheets = getSheets();
  SpreadsheetApp.getActiveSpreadsheet().deleteSheet(sheets[sheetIndex]);
  return getSheetsData();
};

const setActiveSheet = sheetName => {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(sheetName)
    .activate();
  return getSheetsData();
};

export {
  onOpen,
  openDialog,
  openAboutSidebar,
  getSheetsData,
  addSheet,
  deleteSheet,
  setActiveSheet,
  doGet,
  getSheetByNameData,
  uuid
};
