function doPost(request) {
  const {
    products,
    categories,
    category_id,
    finishing,
    suppliers_id,
    vendor_code,
    product_name,
    unit,
    price,
    image_url,
  } = request.parameter;

  const sheet = SpreadsheetApp.getActiveSheet();
  //получаем последнюю строчку
  const lastRow = sheet.getLastRow() + 1;

  const lastRow2 = sheet.getLastRow();

  if (!category_id) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: `Не указан category_id` }),
    ).setMimeType(ContentService.MimeType.JSON);
  } else if (!suppliers_id) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: `Не указан поставщик suppliers_id` }),
    ).setMimeType(ContentService.MimeType.JSON);
  } else if (!product_name) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: `Не указан название товара product_name` }),
    ).setMimeType(ContentService.MimeType.JSON);
  } else if (!unit) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: `Не указан ед. измерения unit` }),
    ).setMimeType(ContentService.MimeType.JSON);
  } else if (!price) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: `Не указана цена price` }),
    ).setMimeType(ContentService.MimeType.JSON);
  }

  sheet.getRange(`A${lastRow}`).setValue(lastRow2);
  sheet.getRange(`B${lastRow}`).setValue(category_id);
  sheet.getRange(`C${lastRow}`).setValue(finishing);
  sheet.getRange(`D${lastRow}`).setValue(suppliers_id);
  sheet.getRange(`E${lastRow}`).setValue(vendor_code);
  sheet.getRange(`F${lastRow}`).setValue(product_name);
  sheet.getRange(`G${lastRow}`).setValue(unit);
  sheet.getRange(`H${lastRow}`).setValue(price);
  sheet.getRange(`I${lastRow}`).setValue(image_url);

  const result = 'Данные сохранены';
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

//****GET****
function doGet(request) {
  if (request.parameter.table_products) {
    let result = {};
    // получаем все продукты
    let products = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName('products')
      .getDataRange()
      .getValues();

    products.shift();
    result.products = createObjectProducts(products);

    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
      ContentService.MimeType.JSON,
    );
  }

  if (request.parameter.table_categories) {
    let result = {};
    // получаем все продукты
    let categories = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName('categories')
      .getDataRange()
      .getValues();

    categories.shift();
    result.categories = createObjectCategories(categories);

    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
      ContentService.MimeType.JSON,
    );
  }
}

// Собераем объект для отправки
function createObjectProducts(dataArr) {
  let obj = [];
  obj = dataArr.map((el) => ({
    product_id: el[0],
    category_id: el[1],
    finishing: el[2],
    suppliers_id: el[3],
    vendor_code: el[4],
    product_name: el[5],
    unit: el[6],
    price: el[7],
    image_url: el[8],
  }));
  return obj;
}
// Собераем объект для отправки
function createObjectCategories(dataArr) {
  let obj = [];
  obj = dataArr.map((el) => ({
    id: el[0],
    parent_id: el[1],
    category_name: el[2],
  }));
  return obj;
}
