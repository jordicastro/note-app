import React from 'react'

interface NoteTitleProps {
  icon: string,
  title: string
}

const NoteTitle: React.FC<NoteTitleProps> = ({ icon, title }) => {
  return (
    <>
      <div className="flex justify-center mt-24 gap-4">
        <h1 className="lg:text-5xl md:text-4xl">{icon}</h1>
        <h3 className="lg:text-5xl md:text-4xl">{title}</h3>
      </div>
    </>
  )
}

export default NoteTitle