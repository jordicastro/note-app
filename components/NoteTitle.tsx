import React from 'react'

interface NoteTitleProps {
  icon: string,
  title: string
}

const NoteTitle: React.FC<NoteTitleProps> = ({ icon, title }) => {
  return (
    <>
      <div className="flex justify-center mt-24 gap-4">
        <h1>{icon}</h1>
        <h3>{title}</h3>
      </div>
    </>
  )
}

export default NoteTitle