import DomainUrl from "../Domains";

export const BRANDSENDPOINTS = {
   getBrands: {
      url: (params) => `${DomainUrl}/brand/${params}`,
      method: 'GET',
   },

   getFiltersLimit: {
      url: `${DomainUrl}/car/limit/`,
      method: 'POST',
   },

   getCars: {
      url: (params) => `${DomainUrl}/car/${params}`,
      method: 'GET',
   },

   addCar: {
      url: `${DomainUrl}/car/`,
      method: 'POST',
   },
   getCarById: {
      url: (id) => `${DomainUrl}/car/${id}/`,
      method: 'GET',
   },

   getColors: {
      url: `${DomainUrl}/color/`,
      method: 'GET',
   },

   installmentCalculator: {
      url: `${DomainUrl}/installment/calculator/`,
      method: 'POST',
   },
   installmentPrograms: {
      url: `${DomainUrl}/installment/program/`,
      method: 'GET',
   },

   getModels: {
      url: (params) => `${DomainUrl}/model/${params}`,
      method: 'GET',
   },

   requestBooking: {
      url: `${DomainUrl}/requests/booking/`,
      method: 'POST',
   },
   requestCallback: {
      url: `${DomainUrl}/requests/call_back/`,
      method: 'POST',
   },
   requestTrade: {
      url: `${DomainUrl}/requests/call_back/`,
      method: 'POST',
   },

   getCarTypes: {
      url: (params) => `${DomainUrl}/type/${params}`,
      method: 'GET',
   },
};
