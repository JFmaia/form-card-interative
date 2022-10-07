import { Formik, FormikHelpers, FormikValues } from 'formik'
import * as yup from 'yup';
import { useState } from 'react'
import  './styles/main.css'

function App() {
  const [count, setCount] = useState(0)

  //Form fields validation
  const validationSchema = yup.object().shape({
    cardName: yup
        .string()
        .required("Can't be blank"),
    cardNumbe: yup
        .number()
        .required("Can't be blank"),
    month: yup
        .number()
        .required("Can't be blank"),
    year: yup
        .number()
        .required("Can't be blank"),
    cvc: yup
        .number()
        .required("Can't be blank")
  });

  return (
    <div className="max-w-[1344px] h-[100%] flex flex-row justify-between items-center self-center mx-32">  
      <div className="flex flex-col gap-10 w-[540px]">
        <img className="w-[440px]" src="/bg-card-front.png" alt="Front of card"/>
        <img className="w-[440px] self-end" src="/bg-card-back.png" alt="Back of card"/>
      </div>

      {/* Form */}
      <Formik  
        initialValues={{ cardName: '', cardNumbe: '', month:'', year:'', cvc:''}}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 50);
        }}
      >
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
        }) => (
          <form onSubmit={handleChange} className="flex flex-col w-[400px] gap-2">
            <div>
              <span className="font-medium text-[#21092F]">CARDHOLDER NAME</span>
              <input  
                className="w-[100%] placeholder:italic placeholder:#8E8593 p-3 bg-white text-[#21092F] border border-#DEDDDF  rounded-lg mt-1"
                placeholder="e.g. Jane Appleseed"
                type="text"
                name="cardName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardName}
              />
            </div>
            <span className="text-red-400 text-sm pl-2">{errors.cardName && touched.cardName && errors.cardName}</span>
            <div>
              <span className="font-medium text-[#21092F]">CARD NUMBER</span>
              <input 
                className="w-[100%] placeholder:italic placeholder:##8E8593 p-3 bg-white text-[#21092F] border border-#DEDDDF rounded-lg mt-1" 
                type="text" 
                placeholder="e.g. 1234 5678 9123 0000"
                name="cardNumbe"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardNumbe}
              />
            </div>
            <span className="text-red-400 text-sm pl-2">{errors.cardNumbe && touched.cardNumbe && errors.cardNumbe}</span>
            
            <div className="w-[100%] flex flex-row items-center">
              <div className="w-[50%] flex flex-col">
                <span className="font-medium text-[#21092F]">EXP. DATE (MM/YY)</span>
                <div className="flex flex-row gap-2 items-center mt-1">
                  <input className="w-20 placeholder:italic placeholder:##8E8593 p-3 bg-white text-[#21092F] border border-#DEDDDF rounded-lg" 
                    type="text" 
                    placeholder="MM"
                    name="month"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.month}
                  />
                  <input className="w-20 placeholder:italic placeholder:##8E8593 p-3 bg-white text-[#21092F] border border-#DEDDDF rounded-lg" 
                    type="text" 
                    placeholder="YY"
                    name="year"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.year}
                  />
                </div>
              </div>
              <div className="w-[50%] flex flex-col">
                <span className="font-medium text-[#21092F]">CVC</span> 
                <input className="placeholder:italic placeholder:##8E8593 p-3 bg-white text-[#21092F] border border-#DEDDDF rounded-lg mt-1" 
                  placeholder="e.g. 123"
                  type="text" 
                  name="cvc"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cvc}
                />
              </div>
            </div>
            <div className="w-[100%] flex flex-row items-center justify-between pl-2">
              <span className="text-red-400 text-sm">{(errors.year && touched.year && errors.year)||(errors.month && touched.month && errors.month)}</span>
              <span className="text-red-400 text-sm pr-24">{(errors.cvc && touched.cvc && errors.cvc)}</span>
            </div>
            <button 
              className="w-[100%] rounded-lg bg-[#21092F] text-[#DEDDDF] p-4 mt-10"
              type='submit'
              disabled={isSubmitting}
            >
              Confirm
            </button>
          </form>
        )
      }
      </Formik>
    </div>
  )
}

export default App
