import { useState } from "react";

type FieldArgs = {
    value: string
    label: string
    placeholder: string
    errorText: string
    inputType: string
    onChanged: (val: string) => void
    isValid: boolean,
    isTextArea?: boolean
    rows?: number
    columns?: number
    height?: string
}

const Field = ({ props }: { props: FieldArgs }) => {
    const [showError, setShowError] = useState(false)

    const fieldChanged = (event: any) => {
        props.onChanged(event.target.value)
        if (props.value !== "") {
            setShowError(true)
        }
    }

    const showMessage = () => {
        if (!props.isValid && showError) {
            return true
        } else {
            return false
        }
    }

    if (props.isTextArea ?? false) {
        return <div className="space-y-1 w-full">
            <div className="flex space-x-4 items-center justify-between">
                <h3 className="font-bold text-md ml-4 text-gray-500">
                    {props.label}
                </h3>
                {showMessage() ? <h3 className="text-red-300 font-medium text-md">{props.errorText}</h3> : <></>}
            </div>
            <textarea className={`${showMessage() ? "focus:border-red-300" : "focus:border-main"} resize-none py-2 px-4 w-full bg-bg-200 dark:bg-bg-dark-500 rounded-md border-transparent border-2 focus:outline-none overflow-y-scroll ${props.height ?? "h-[500px]"}`} onChange={fieldChanged} placeholder={props.placeholder} value={props.value} rows={props.rows ?? 8} cols={props.columns ?? 50}></textarea>
        </div>
    } else {
        return (
            <div className="space-y-1 w-full">
                <div className="flex space-x-4 items-center justify-between">
                    <h3 className="font-bold text-md ml-4 text-gray-500">
                        {props.label}
                    </h3>
                    {showMessage() ? <h3 className="text-red-300 font-medium text-md">{props.errorText}</h3> : <></>}
                </div>
                <input className={`${showMessage() ? "focus:border-red-300" : "focus:border-main"} py-2 px-4 w-full bg-bg-200 dark:bg-bg-dark-500 rounded-md border-transparent border-2 focus:outline-none`} placeholder={props.placeholder} type={props.inputType} value={props.value} onChange={fieldChanged} />
            </div>
        )
    }
}

export default Field