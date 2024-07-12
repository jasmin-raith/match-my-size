export default function SelectSize() {
  return (
    <div className="mx-8">
      <div>
        <p>
          Um Kleidung vorzuschlagen, die perfekt zu deinem Körper passt, musst
          du jeweils einen Artikel für den Ober- und Unterkörper auswählen, der
          perfekt zu dir passt.
        </p>
        <br />
        <p>
          Bitte geh in deine nächste C&A-Filiale und wähle aus zwei Artikeln die
          Größe aus, die dir am besten passt:
        </p>
      </div>
      <br />
      <div className="flex flex-col items-start">
        <p>
          <b>Oberteil</b>
        </p>
        <p>Long sleeve top</p>
        <p className="text-xs">
          <b>Item number: 2215702</b>
        </p>
      </div>
      <div className="w-3/5">
        <label
          htmlFor="choose-size"
          className="block text-sm mt-2.5"
        >
          Größe wählen
        </label>
        <select
          id="choose-size"
          name="choose-size"
          defaultValue="S"
          className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
      </div>
    </div>
  );
}
