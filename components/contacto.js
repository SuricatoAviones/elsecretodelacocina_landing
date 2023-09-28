import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

export const Contacto = ({}) => {
  // Formulario y validacion con formik y Yup
  const formik = useFormik({
    initialValues:{      
        nombre:'',
        apellido:'',
        email: '',
        telefono: '',
    },
    validationSchema: Yup.object({
        email: Yup.string()
                    .email('El email no es valido')
                    .required('El Email es Obligatorio'),
        nombre: Yup.string()
                    .required('El nombre no puede ir vacio'),
        apellido: Yup.string()
                    .required('El apellido no puede ir vacio'),
        telefono: Yup.string()
                    .required('El telefono no puede ir vacio')  ,          
                       
    }),
    onSubmit: async datos =>{
        try {
            const respuesta = await clienteAxios.post('/newsletter', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg
            });
        } catch (error) {
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })
        }
    }
})
  
    return (
    <main className='w-screen md:w-screen pb-20'>
        <h3 className="leter text-center  text-7xl text-base-200 py-20">Contáctanos</h3>
        <form className=" w-3/5 flex m-auto flex-col items-center self-center justify-center font-secundary">
            <section className=" flex justify-center gap-6 mb-6  flex-wrap  ">
                <div className="flex flex-col">
                    <label className="mb-2 text-base font-semibold focus:boder-base-300">
                        NOMBRE
                    </label>
                    <input className="w-96  min-w-full h-12 border-2  active:border-gray-50 focus:text-base-400" type="text" required="" name="nombre" value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    { formik.touched.nombre && formik.errors.nombre ? (<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.nombre}</p>
                            </div>) : null}
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-base font-semibold">
                        APELLIDO
                    </label>
                    <input className="w-96  min-w-full h-12 border-2 focus:border-base-300" type="text" required="" name="apellido" value={formik.values.apellido} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    { formik.touched.apellido && formik.errors.apellido ? (<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.apellido}</p>
                            </div>) : null}
                </div>
            </section>
            <section className=" flex justify-center box-border gap-6 mb-6 flex-wrap">
                <div className="flex flex-col">
                    <label className="mb-2 text-base font-semibold">
                        MAIL
                    </label>
                    <input className="w-96 min-w-full h-12 border-2 focus:border-base-300" type="email" required="" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    { formik.touched.email && formik.errors.email ? (<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.email}</p>
                            </div>) : null}
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-base font-semibold">
                        TELÉFONO
                    </label>
                    <input className="w-96 min-w-full h-12 border-2 hover:border-base-300" type="tel" required="" name="telefono" value={formik.values.telefono} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    { formik.touched.telefono && formik.errors.telefono ? (<div className='my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.telefono}</p>
                            </div>) : null}
                </div>
            </section>
            <button className="bg-base-300 self-end  py-4 px-16 text-base-600 rounded-full font-semibold hover:bg-base-400 duration-500" type="submit">
                Enviar
            </button>
        </form>
    </main>
  )
}