import { BRANDSENDPOINTS } from "../EndPoints/BrandsEndpoints";
import { Network } from "../Network";

export class BrandsServices {
   static getBrands(params) {
      return Network.fetch(BRANDSENDPOINTS.getBrands.url(params), {
         method: BRANDSENDPOINTS.getBrands.method,
      });
   }

   static getFiltersLimit() {
      return Network.fetch(BRANDSENDPOINTS.getFiltersLimit.url, {
         method: BRANDSENDPOINTS.getFiltersLimit.method,
      });
   }

   static getCars(params) {
      return Network.fetch(BRANDSENDPOINTS.getCars.url(params), {
         method: BRANDSENDPOINTS.getCars.method,
      });
   }

   static addCar(values) {
      const data = new FormData()

      Object.keys(values).forEach(key => {
         if (key === 'left_side' && values['left_side_File'] !== undefined) {
            data.append(key, values['left_side_File'])
         } else if (key === 'front_side' && values['front_side_File'] !== undefined) {
            data.append(key, values['front_side_File'])
         } else if (key === 'right_side' && values['right_side_File'] !== undefined) {
            data.append(key, values['right_side_File'])
         } else if (key === 'interior_fr' && values['interior_fr_File'] !== undefined) {
            data.append(key, values['interior_fr_File'])
         } else if (key === 'rear' && values['rear_File'] !== undefined) {
            data.append(key, values['rear_File'])
         } else if (key === 'interior_pr' && values['interior_pr_File'] !== undefined) {
            data.append(key, values['interior_pr_File'])
         } else {
            data.append(key, values[key])
         }
      })
      return Network.fetch(BRANDSENDPOINTS.addCar.url, {
         body: data,
         method: BRANDSENDPOINTS.addCar.method,
      });
   }
   static getCarById(id) {
      return Network.fetch(BRANDSENDPOINTS.getCarById.url(id), {
         method: BRANDSENDPOINTS.getCarById.method,
      });
   }

   static getColors() {
      return Network.fetch(BRANDSENDPOINTS.getColors.url, {
         method: BRANDSENDPOINTS.getColors.method,
      });
   }

   static installmentCalculator(values) {
      return Network.fetch(BRANDSENDPOINTS.installmentCalculator.url, {
         body: JSON.stringify(values),
         headers: {
            "content-Type": "application/json"
         },
         method: BRANDSENDPOINTS.installmentCalculator.method,
      });
   }
   static installmentPrograms() {
      return Network.fetch(BRANDSENDPOINTS.installmentPrograms.url, {
         method: BRANDSENDPOINTS.installmentPrograms.method,
      });
   }

   static getModels(params) {
      return Network.fetch(BRANDSENDPOINTS.getModels.url(params), {
         method: BRANDSENDPOINTS.getModels.method,
      });
   }

   static requestBooking(values) {
      const data = new FormData()

      Object.keys(values).forEach(key => {
         data.append(key, values[key])
      })

      return Network.fetch(BRANDSENDPOINTS.requestBooking.url, {
         body: data,
         method: BRANDSENDPOINTS.requestBooking.method,
      });
   }
   static requestCallback(values) {
      return Network.fetch(BRANDSENDPOINTS.requestCallback.url, {
         body: JSON.stringify(values),
         headers: {
            "content-Type": "application/json"
         },
         method: BRANDSENDPOINTS.requestCallback.method,
      });
   }
   static requestTrade(values) {
      return Network.fetch(BRANDSENDPOINTS.requestTrade.url, {
         body: JSON.stringify(values),
         headers: {
            "content-Type": "application/json"
         },
         method: BRANDSENDPOINTS.requestTrade.method,
      });
   }

   static getCarTypes(params) {
      return Network.fetch(BRANDSENDPOINTS.getCarTypes.url(params), {
         method: BRANDSENDPOINTS.getCarTypes.method,
      });
   }
}
