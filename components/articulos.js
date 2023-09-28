import React from 'react'
import  Articulo  from './Articulo'

export function Articulos ({articulos})  {
    console.log(articulos)
    return (
    <main className=" pb-20">
        <h3 className="leter font-extrabold text-center text-7xl text-base-200 py-24">
            Nuestros artículos
        </h3>
        <section className='flex'>
        <aside className="w-1/3 h-1/3 flex justify-end pr-12 font-secundary ">
            <nav className="flex pt-4 pl-4 pr-40 pb-40 gap-4 bg-base-600 rounded-md border-2 shadow-2xl">
                <ul className="flex flex-col  gap-4 text-base-100 ">
                    <li className=" hover:text-base-300 "><button  value="">
                        TODOS
                    </button></li><li className="hover:text-base-300">
                            <button value="?filter=Productos ">PRODUCTOS</button>
                            </li>
                            <li className=" hover:text-base-300">
                                <button value="?filter=Recetas">RECETAS</button></li>
                                <li className="hover:text-base-300">
                <button value="?filter=Consejos">
                    CONSEJOS
                </button>
                </li>
                </ul>
            </nav>
        </aside>
        <article className="w-2/3 flex flex-wrap gap-6 justify-start ">
            {articulos?.map(articulo =>(
                <Articulo 
                    key={articulo.id}
                    articulo = {articulo.attributes}
                />
            ))}
        </article>
        </section>
    </main>
  )
}

export async function getServerSideProps(){
    const respuesta = await fetch`${process.env.ARTICULOS_URL}/articles`;
    const {data: articulos} =await respuesta.json()

    return{
        props:{
            articulos,
        }
    }

}
