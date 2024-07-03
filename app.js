// write code here
const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };
  console.log(product1.distributor.address.province);
  let product2 = {};
  product2 = product1;
  console.log(product2.distributor.address.province);