export default function SelectSize() {
  return (
    <div className="h-full flex flex-col justify-between p-8">
      
      <p>
        Um Kleidung vorzuschlagen, die perfekt zu deinem Körper passt, gib bitte
        nachfolgende Daten ein:
      </p>

      <img src="/body-measurements.png" alt="" className="" />
      
      <div className="relative flex justify-between">
        <label
          htmlFor="name"
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          Schulterbreite
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="36cm"
          className="block w-5/12 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <button
          type="button"
          className="rounded-md w-5/12 bg-[var(--accent-color)] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--accent-color-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-color)]"
        >
          Weiter
        </button>
      </div>

    </div>
  );
}
