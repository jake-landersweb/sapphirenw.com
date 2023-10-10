import { Input, Loading, createTheme } from "@nextui-org/react";
import { useState } from "react";

export default function Form({ initTopic, title }: { initTopic?: string, title?: string }) {
    const [topic, setTopic] = useState(initTopic ?? "")
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    async function sendEmail() {
        if (formIsValid()) {
            try {
                setIsLoading(true)
                const b = {
                    "email": email,
                    "name": name,
                    "body": `Topic: ${topic}\nCompany: ${company}`,
                    "tag": "sapphirenw",
                }
                const resp = await fetch('/api/mail', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(b)
                })
                console.log(resp)
                if (resp.status == 200) {
                    setShowSuccess(true)
                    setTimeout(() => setShowSuccess(false), 5000)
                    setTopic("")
                    setName("")
                    setCompany("")
                    setEmail("")
                } else {
                    setShowError(true)
                    setTimeout(() => setShowError(false), 5000)
                }
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
    }

    const getButtonClass = () => {
        var cls = "bg-main-400 transition-colors text-lt h-[50px] rounded-md"
        if (showError) {
            cls += " bg-red-500"
        } else if (showSuccess) {
            cls += " bg-green-400"
        } else if (formIsValid()) {
            cls += " bg-main-500 hover:bg-main-600"
        }
        return cls
    }

    const formIsValid = () => {
        if (topic == "" || name == "" || company == "" || email == "" || !emailValid()) {
            return false
        } else {
            return true
        }
    }

    const emailValid = () => {
        if (email == "") {
            return true
        }
        const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const getNameValidationText = () => {
        if (name == "") {
            return " - Cannot be Empty"
        } else {
            return ""
        }
    }

    const getEmailValidationText = () => {
        if (email == "") {
            return " - Cannot be Empty"
        } else if (emailValid()) {
            return ""
        } else {
            return " - Invalid Email"
        }
    }

    const getButtonContent = () => {
        if (isLoading) {
            return <Loading type="points" color="currentColor" size="sm" />
        } else {
            if (showError) {
                return <p>There was an issue</p>
            }
            if (showSuccess) {
                return <p>Successfully sent request</p>
            }
            return <p>Submit</p>
        }
    }

    return <div className={createTheme({
        type: "dark", // it could be "light" or "dark"
        theme: {
            colors: {
                primary: '#3C63EC',
                secondary: '#A47DE2',
            },
        }
    })}>
        <div className="p-8 rounded-md bg-dk-500 w-fit space-y-8 lg:max-w-2xl text-lt">
            <h4 className="text-2xl md:text-4xl font-bold">{title ?? "Request More Information"}</h4>
            <p>Would you like to speak to us about our services? Just submit your details and we’ll be in touch shortly. You can also email us directly if you would prefer – <span className="font-bold">success@sapphirenw.com</span></p>
            <div className="">
                <Input
                    underlined
                    fullWidth
                    labelPlaceholder={topic == "" ? "What would you like to talk about?" : "Topic"}
                    color="primary"
                    value={topic}
                    onChange={(e) => { setTopic(e.target.value) }}
                />
            </div>
            <div className="">
                <Input
                    underlined
                    fullWidth
                    labelPlaceholder={`Name${getNameValidationText()}`}
                    color="primary"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </div>
            <div className="">
                <Input
                    underlined
                    fullWidth
                    labelPlaceholder="Company"
                    color="primary"
                    value={company}
                    onChange={(e) => { setCompany(e.target.value) }}
                />
            </div>
            <div className="">
                <Input
                    underlined
                    fullWidth
                    inputMode="email"
                    labelPlaceholder={`Email${getEmailValidationText()}`}
                    color="primary"
                    value={email}
                    status={emailValid() ? "default" : "error"}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={(_) => sendEmail()} disabled={!formIsValid()} className={getButtonClass()}>
                    {getButtonContent()}
                </button>
                <a href="https://calendly.com/jake-sapphirenw/30min" target="_blank" rel="noopener noreferrer">
                    <p className="border-2 border-dk-400 hover:bg-dk-400 transition-colors text-lt h-[50px] rounded-md grid place-items-center">
                        Schedule a Video Meeting
                    </p>
                </a>
            </div>
        </div>
    </div>
}