export function WelcomeMessage({ message, title }) {
    return (
        <>
            {
                title ?
                    <h1>{message || 'default'}</h1>
                    :
                    <p>{message || 'default'}</p>
            }
        </>
    )
}