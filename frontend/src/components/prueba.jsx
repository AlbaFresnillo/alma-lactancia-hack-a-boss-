import { useState } from 'react'
import FormBuilder from './FormBuilder'
import EditForm from './EditForm'

import FormDropdown from './FormDropdown'

const Prueba = ({ publishedForm, setPublishedForm }) => {
    const [forms, setForms] = useState({})
    const [editingForm, setEditingForm] = useState(false)
    const [selectedForm, setSelectedForm] = useState(null)
    return (
        <div>
            <h1>Formularios</h1>
            {editingForm ? (
                <EditForm
                    setEditingForm={setEditingForm}
                    selectedForm={selectedForm}
                    setForms={setForms}
                    setSelectedForm={setSelectedForm}
                    setPublishedForm={setPublishedForm}
                    publishedForm={publishedForm}
                />
            ) : (
                <FormBuilder setForms={setForms} />
            )}
            <FormDropdown
                forms={forms}
                setForms={setForms}
                setPublishedForm={setPublishedForm}
                publishedForm={publishedForm}
                setEditingForm={setEditingForm}
                selectedForm={selectedForm}
                setSelectedForm={setSelectedForm}
            />
        </div>
    )
}
export default Prueba