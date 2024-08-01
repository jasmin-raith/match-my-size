export default function SelectSize() {
  return (
    <div className="h-full flex flex-col justify-between p-8">
      
      <p>
        Um Kleidung vorzuschlagen, die perfekt zu deinem Körper passt, gib bitte
        nachfolgende Daten ein:
      </p>

      <img src="/body-measurements.png" alt="" className="" />
      
      <div className="relative">
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
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

    </div>
  );
}
