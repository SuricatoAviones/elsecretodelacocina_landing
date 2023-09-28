import Head from "next/head"
import Header from "./header"
import { Contacto } from "./contacto"
import { Articulos } from "./articulos"
export default function layout({children}) {
  return (
    <>
        <Head>
            <title>Recetas</title>
        </Head>
        <Header />
        <Articulos />
        <Contacto />
        {children}
    </>
  )
}
