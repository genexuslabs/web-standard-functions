declare let gtag;

interface Item {
  Id: string;
  Name: string;
  Category: string;
  Price: number;
  Quantity: number;
  CurrencyCode: string;
}

interface GxCollectionData {
  TransactionId: string;
  Affiliation: string;
  Revenue: number;
  Tax: number;
  Shipping: number;
  CurrencyCode: string;
  Items: Array<Item>;
}

export const trackPurchase = (purchaseInfo: GxCollectionData) => {
  let arrayAux = [];
  let aux;
  for (let i = 0; i < purchaseInfo.Items.length; i++) {
    aux = {
      item_id: purchaseInfo.Items[i].Id,
      item_name: purchaseInfo.Items[i].Name,
      item_category: purchaseInfo.Items[i].Category,
      price: purchaseInfo.Items[i].Price,
      quantity: purchaseInfo.Items[i].Quantity,
      currency: purchaseInfo.Items[i].CurrencyCode
    };
    arrayAux.push(aux);
  }

  gtag("event", "purchase", {
    transaction_id: purchaseInfo.TransactionId,
    affiliation: purchaseInfo.Affiliation,
    value: purchaseInfo.Revenue,
    tax: purchaseInfo.Tax,
    shipping: purchaseInfo.Shipping,
    currency: purchaseInfo.CurrencyCode,
    items: arrayAux
  });
};
