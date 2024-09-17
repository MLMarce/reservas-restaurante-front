'use client'

export default function Button({bgColor,title,onClick}: {bgColor: string, title: string, onClick: () => void }){
    return(
        <button onClick={onClick} className={`text-white ${bgColor} px-4 py-2 rounded-md`}>
            {title}
        </button>
    )
}