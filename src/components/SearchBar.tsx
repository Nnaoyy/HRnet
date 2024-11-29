interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
  }
  
  export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="form-control"
        />
      </div>
    )
  };