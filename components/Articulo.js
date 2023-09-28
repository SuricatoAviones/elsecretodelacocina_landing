import React from 'react'

export default function Articulo ({articulo}) {
  const {image, content, title} = articulo;
  console.log(articulo)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image.data.attributes.formats.medium.url} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {title}
        </div>
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>
    </div>
  )
}
