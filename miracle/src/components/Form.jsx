import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
    useEffect(()=>{
        AOS.init({duration:1500,
            easing: "ease-in-out"})
    },[])
    //state form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    //status input
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    //error message
    const [nameError, setNameError] = useState('Заполните поле')
    const [emailError, setEmailError] = useState('Заполните поле')
    const [phoneError, setPhoneError] = useState('Заполните поле')

    const [formValid, setFormValid] = useState(false)

    const [submitButton, setSubmitButton] = useState('Оставить заявку')
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if (nameError || emailError || phoneError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, nameError, phoneError])

    //validator handler
    const nameValidator = (e) => {
        setName(e.target.value)
        if (e.target.value === '') {
            setNameError('Заполните поле')
        } else {
            setNameError('')
        }
    }
    const emailValidator = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target.value === '') {
            setEmailError('Заполните поле')
        } else if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    }
    const phoneValidator = (e) => {
        setPhone(e.target.value)
        const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
        if (e.target.value === '') {
            setPhoneError('Заполните поле')
        } else if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError('Некорректный номер телефона')
        } else {
            setPhoneError('')
        }
    }

    //blur handler
    const blurHandler = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'tel':
                setPhoneDirty(true)
                break
        }
    }

    function sendEmail(e) {
        e.preventDefault();
        if (formValid) {
            setSubmitButton('Заявка отправлена');
            setSubmitted(true);

            emailjs.sendForm('service_hxtt2ep', 'template_1rqfxht', e.target, "user_kUOblS1cYE2dBlGtRPkLq")
                .then((result) => {
                    console.log("submitted result", result.text);
                    resetForm();
                    setTimeout(() => {
                        setSubmitButton('Оставить заявку');
                        setSubmitted(false);
                    }, 5000);
                }, (error) => {
                    setSubmitButton('Ошибка отправки');
                    setSubmitted(true);
                    resetForm();
                    setTimeout(() => {
                        setSubmitButton('Оставить заявку');
                        setSubmitted(false);
                    }, 5000);
                    console.log(error.text);
                });
        } else {
            console.log("Error submitted")
        }
        e.target.reset()
    }

    function resetForm() {
        setName('')
        setEmail('')
        setPhone('')
        //status input
        setNameDirty(false)
        setEmailDirty(false)
        setPhoneDirty(false)
        //error message
        setNameError('Заполните поле')
        setEmailError('Заполните поле')
        setPhoneError('Заполните поле')


        setFormValid(false)
    }

    return (
        <div className="form-block-wrapper" id="form">
            <div className="container-wrapper form-wrapper">
                <div data-aos="fade-in" className="form-title">
                    <h3>Хотите узнать стоимость</h3>
                    <h3>разработки сайта?</h3>
                    {/*<h2>Напишите нам</h2>*/}
                </div>
                <div className="form-content-wrapper">
                    <form  data-aos="fade-up" className="form" onSubmit={sendEmail}>
                        <div className="form-title">
                            <h2>Напишите нам</h2>
                        </div>

                        <label className="form-label name-label">
                            <div className="label-block">
                                <p className="label-title">Имя<span className="err-star">*</span></p>
                                {(nameDirty && nameError) && <div className={"err-block"}>
                                    <p>{nameError}</p>
                                    <span className="err-icon"/>
                                </div>}
                            </div>
                            <input onChange={e => nameValidator(e)}
                                   value={name}
                                   onBlur={e => blurHandler(e)}
                                   className={"input " + (nameDirty && nameError ? 'input-border-error' : 'input-border')}
                                   type="text"
                                   name="name"
                                   placeholder="Name"/>
                            <input type="hidden" name="subject"/>
                        </label>
                        <label className="form-label">
                            <div className="label-block">
                                <p>Email<span className="err-star">*</span></p>
                                {(emailDirty && emailError) && <div className={"err-block"}>
                                    <p>{emailError}</p>
                                    <span className="err-icon"/>
                                </div>}
                            </div>
                            <input
                                onChange={e => emailValidator(e)}
                                value={email}
                                onBlur={e => blurHandler(e)}
                                className={"input " + (emailDirty && emailError ? 'input-border-error' : '')}
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"/>
                        </label>
                        <label className="form-label">
                            <div className="label-block">
                                <p>Телефон<span className="err-star">*</span></p>
                                {(phoneDirty && phoneError) && <div className={"err-block"}>
                                    <p>{phoneError}</p>
                                    <span className="err-icon"/>
                                </div>}
                            </div>
                            <input onChange={e => phoneValidator(e)}
                                   value={phone}
                                   onBlur={e => blurHandler(e)}
                                   className={"input " + (phoneDirty && phoneError ? 'input-border-error' : '')}
                                   type="tel"
                                   name="tel"
                                   placeholder="+375 (_ _) _ _  _ _  _ _ _"/>
                        </label>
                        <label className="form-label">
                            <p>Cooбщение</p>
                            <textarea className={'textarea'} name="message" placeholder="Текст сообщения"/>
                        </label>
                        <input
                            className={"form-btn" + (submitted ? ' btn-submitted' : '')}
                            type="submit"
                            value={submitButton}/>
                    </form>
                    <div className="image-wrapper"/>
                </div>
            </div>
        </div>
    );
};

export default Form
