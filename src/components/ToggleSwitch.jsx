import { useState } from "react"

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(true)

  function handleToggle() {
    setIsToggled((currentToggle) => !currentToggle)
  }

  return (
    <div className="mt-1">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          id="switch-2"
          type="checkbox"
          className="peer sr-only"
          checked={isToggled}
          onChange={handleToggle}
        />
        <div className="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
      </label>
    </div>
  )
}

export default ToggleSwitch
