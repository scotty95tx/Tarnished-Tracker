import React, { SyntheticEvent } from 'react'

interface Props {
    onProfileCreate: (e: SyntheticEvent) => void;
    id: string;
}

const AddProfile = ({ onProfileCreate, id }: Props) => {
  return (
    <div>
        <form onSubmit={onProfileCreate}>
        <input readOnly={true} hidden={true} value={id} />
        <button type="submit">Add To Profile</button>
        </form>
    </div>
  )
}

export default AddProfile