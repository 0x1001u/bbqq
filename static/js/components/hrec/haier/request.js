import axios from "axios";

export const getManualJson = (model, token) => {
  return axios({
    // url: 'https://openplat.haier.net/center/product/api/upper/getProductManualUrl',
    // url: 'https://openplat-stage.haier.net/pdm/newPDM-Interface/pdm-external-api/api/upper/product/productManualUrl',
    url: "https://openplat.haier.net/pdm/newPDM-Interface/pdm-external-api/api/upper/product/productManualUrl",
    params: {
      key: "1000360",
      secret: "3f5203c0cdc6672c06a468baf05a6afa",
      model: model,
    },
    headers: {
      Authorization: token,
    },
    method: "get",
  });
};
