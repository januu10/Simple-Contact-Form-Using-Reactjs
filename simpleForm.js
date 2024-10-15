const Submit_Url = 'https://www.greatfrontend.com/api/questions/contact-form';

export default async function simpleForm(event) {
    event.preventDefault();
    const form = event.target;

    try{
        if(form.action !== Submit_Url){
            alert('Incorrect form action value');
            return;
        }

        if(form.method.toLowerCase() !== 'post'){
            alert('Incorrect form method value');
            return;
        }
        const formData = new FormData(form);
        const response = await fetch(Submit_Url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
            }),
        });
        const text = await response.text();
        alert(text);
    } catch(_){
        alert('Error submiiting form!');
    }
    
}