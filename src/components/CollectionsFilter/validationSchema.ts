import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  minPrice: Yup.number().typeError('Should be a number!').notRequired(),
  maxPrice: Yup.number().typeError('Should be a number!').notRequired(),
  saleType: Yup.string().notRequired(),
});

export default validationSchema;
