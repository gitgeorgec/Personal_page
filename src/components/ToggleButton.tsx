export default function ToggleButton({ checked = false, onToggle = () => {} }) {
  return (
    <div
      className="bg-gray-600 w-10 h-4 rounded-full flex items-center"
      onClick={onToggle}
    >
      <input
        className="peer sr-only"
        type="checkbox"
        checked={checked}
        onChange={onToggle}
      />
      <div className="rounded-full w-5 h-5 bg-white peer-checked:bg-white-200 peer-checked:translate-x-full transition-all"></div>
    </div>
  );
}
