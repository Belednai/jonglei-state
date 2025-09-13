import { useState, useRef, useEffect } from "react";
import { Search, X, Filter, FileText, Building2, Newspaper, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SearchResult {
  id: string;
  type: 'news' | 'project' | 'department' | 'document';
  title: string;
  description: string;
  url: string;
  category?: string;
  date?: string;
  relevance: number;
}

interface SearchFilters {
  types: string[];
  categories: string[];
  dateRange: string;
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    type: 'news',
    title: 'New Infrastructure Project Announced',
    description: 'The governor announced a major infrastructure development project for Bor County.',
    url: '/news/new-infrastructure-project',
    category: 'Infrastructure',
    date: '2024-01-15',
    relevance: 0.95
  },
  {
    id: '2',
    type: 'project',
    title: 'Bor Hospital Renovation',
    description: 'Renovation project for the main hospital in Bor town.',
    url: '/projects/bor-hospital-renovation',
    category: 'Healthcare',
    date: '2024-01-10',
    relevance: 0.88
  },
  {
    id: '3',
    type: 'department',
    title: 'Department of Health',
    description: 'Government department responsible for healthcare services.',
    url: '/departments/health',
    category: 'Healthcare',
    relevance: 0.82
  },
  {
    id: '4',
    type: 'document',
    title: 'Annual Budget Report 2024',
    description: 'Comprehensive budget report for Jonglei State government.',
    url: '/documents/annual-budget-2024',
    category: 'Finance',
    date: '2024-01-01',
    relevance: 0.78
  }
];

const searchTypes = [
  { id: 'news', label: 'News & Announcements', icon: Newspaper },
  { id: 'project', label: 'Projects', icon: FolderOpen },
  { id: 'department', label: 'Departments', icon: Building2 },
  { id: 'document', label: 'Documents', icon: FileText }
];

const categories = [
  'Infrastructure', 'Healthcare', 'Education', 'Finance', 
  'Agriculture', 'Security', 'Transportation', 'Environment'
];

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    types: [],
    categories: [],
    dateRange: 'all'
  });
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      performSearch();
    } else {
      setResults([]);
    }
  }, [query, filters]);

  const performSearch = async () => {
    setIsSearching(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter results based on query and filters
    let filteredResults = mockSearchResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                          result.description.toLowerCase().includes(query.toLowerCase());
      
      const matchesType = filters.types.length === 0 || filters.types.includes(result.type);
      const matchesCategory = filters.categories.length === 0 || 
                             (result.category && filters.categories.includes(result.category));
      
      return matchesQuery && matchesType && matchesCategory;
    });

    // Sort by relevance
    filteredResults.sort((a, b) => b.relevance - a.relevance);
    
    setResults(filteredResults);
    setIsSearching(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch();
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setFilters({ types: [], categories: [], dateRange: 'all' });
  };

  const toggleFilter = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const getTypeIcon = (type: string) => {
    const typeConfig = searchTypes.find(t => t.id === type);
    return typeConfig ? <typeConfig.icon className="h-4 w-4" /> : null;
  };

  const getTypeLabel = (type: string) => {
    const typeConfig = searchTypes.find(t => t.id === type);
    return typeConfig?.label || type;
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search news, projects, departments..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            className="pl-10 pr-20 w-full"
            aria-label="Global search"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            {query && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="h-6 w-6 p-0 hover:bg-muted"
                aria-label="Clear search"
              >
                <X className="h-3 w-3" />
              </Button>
            )}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-muted"
                  aria-label="Search filters"
                >
                  <Filter className="h-3 w-3" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Content Types</h4>
                    <div className="space-y-2">
                      {searchTypes.map((type) => (
                        <div key={type.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`type-${type.id}`}
                            checked={filters.types.includes(type.id)}
                            onCheckedChange={() => toggleFilter('types', type.id)}
                          />
                          <Label htmlFor={`type-${type.id}`} className="flex items-center space-x-2 text-sm">
                            <type.icon className="h-4 w-4" />
                            <span>{type.label}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={filters.categories.includes(category)}
                            onCheckedChange={() => toggleFilter('categories', category)}
                          />
                          <Label htmlFor={`category-${category}`} className="text-sm">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && (query.length >= 2 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-muted-foreground">
              <Search className="h-6 w-6 mx-auto mb-2 animate-pulse" />
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="p-2">
              {results.map((result) => (
                <a
                  key={result.id}
                  href={result.url}
                  className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-sm truncate">{result.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {getTypeLabel(result.type)}
                        </Badge>
                        {result.category && (
                          <Badge variant="outline" className="text-xs">
                            {result.category}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {result.description}
                      </p>
                      {result.date && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(result.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="p-4 text-center text-muted-foreground">
              <Search className="h-6 w-6 mx-auto mb-2" />
              <p>No results found for "{query}"</p>
              <p className="text-xs">Try adjusting your search terms or filters</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
