import useFormDisplay from '../hooks/useFormDisplay'

const FormDisplay = ({ publishedForm, setPublishedForm }) => {
    const { sendDataHandler, formRef } = useFormDisplay(
        publishedForm,
        setPublishedForm
    )
    if (!publishedForm?.fields) {
        console.log(publishedForm);
        <p>eooo</p>
        return <div>No hay datos para mostrar.</div>
    }

    return (
        <div>
            <h2>{publishedForm.formName}</h2>
            <form ref={formRef} onSubmit={sendDataHandler}>
                {publishedForm.fields.map((field, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <label>
                            {field.label}:
                            <input
                                type={field.type}
                                name={field.label
                                    .toLowerCase()
                                    .replace(/\s+/g, '_')} // Para sustituir espacios en blanco por guiones bajos
                                placeholder={field.label}
                                required
                            />
                        </label>
                    </div>
                ))}
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default FormDisplay
