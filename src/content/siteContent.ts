export type Feature = {
  title: string;
  description: string;
  icon: 'organize' | 'duplicate' | 'location' | 'batch' | 'speed' | 'search';
  screenshot?: string;
  bullets: string[];
};

export const placeholderLinks = {
  microsoftStore: 'https://www.microsoft.com/store/apps/REPLACE-WITH-SNAPATLAS-ID'
};

export type AudienceUseCase = {
  audience: string;
  challenge: string;
  outcome: string;
  highlights: string[];
};

export const heroStats = [
  { label: 'Built for large libraries', value: '500k+ photos' },
  { label: 'Metadata-first organization', value: 'Date + location' },
  { label: 'Workflow acceleration', value: 'Batch operations' }
];

export const coreFeatures: Feature[] = [
  {
    title: 'Timeline-Based Organization',
    description:
      'Sort massive photo collections into year-month-day or year-day folders in one run using capture metadata.',
    icon: 'organize',
    screenshot: 'images/placeholders/feature-organize.svg',
    bullets: [
      'Supports granular and compact date folder formats',
      'Preserves original files while creating clean output structures',
      'Designed for migration from mixed camera and phone dumps'
    ]
  },
  {
    title: 'Duplicate Detection',
    description:
      'Find and remove duplicate photos before they multiply across backups, external drives, and cloud exports.',
    icon: 'duplicate',
    screenshot: 'images/placeholders/feature-duplicates.svg',
    bullets: [
      'Surface duplicate candidates quickly',
      'Reduce storage bloat before archival',
      'Improve backup reliability by removing noise'
    ]
  },
  {
    title: 'Location Intelligence',
    description:
      'Transform inconsistent GPS tags into meaningful place names that are easy to scan and search later.',
    icon: 'location',
    screenshot: 'images/placeholders/feature-location.svg',
    bullets: [
      'Works with embedded metadata from phones and cameras',
      'Normalize naming across different devices',
      'Create human-readable location context for long-term archives'
    ]
  },
  {
    title: 'Batch Processing Tools',
    description:
      'Run repetitive organization tasks in bulk so large-scale cleanup projects finish in hours, not weekends.',
    icon: 'batch',
    screenshot: 'images/placeholders/feature-batch.svg',
    bullets: [
      'Apply operations to large directory trees',
      'Consistent handling for photo imports and backlog folders',
      'Useful for recurring family and client ingestion workflows'
    ]
  },
  {
    title: 'Fast Search and Filtering',
    description:
      'Quickly locate exact moments by combining date structure, location context, and cleaner folder hierarchies.',
    icon: 'search',
    screenshot: 'images/placeholders/location-rename.svg',
    bullets: [
      'Designed for practical retrieval instead of endless scrolling',
      'Complements existing backup and storage systems',
      'Keeps large libraries explorable over time'
    ]
  },
  {
    title: 'Performance for Real Archives',
    description:
      'Built for people who manage photo libraries that keep growing across phones, cameras, and old drives.',
    icon: 'speed',
    screenshot: 'images/placeholders/before-after.svg',
    bullets: [
      'Handles hobbyist and enthusiast-scale volumes',
      'Encourages repeatable, low-friction maintenance',
      'Prioritizes throughput and practical visibility'
    ]
  }
];

export const useCases: AudienceUseCase[] = [
  {
    audience: 'DataHoarders',
    challenge: 'Tens or hundreds of thousands of photos spread across inconsistent folders and duplicates.',
    outcome: 'A normalized archive structure that is easier to search, deduplicate, and back up.',
    highlights: [
      'Scale-friendly directory organization by date',
      'Duplicate cleanup before long-term storage',
      'Repeatable maintenance workflows for future imports'
    ]
  },
  {
    audience: 'Family Archivists',
    challenge: 'Years of family photos from old phones, shared drives, and mixed export formats.',
    outcome: 'A chronological family archive where meaningful memories are easier to rediscover.',
    highlights: [
      'Consolidate multi-device family collections',
      'Restore timeline clarity with metadata-based sorting',
      'Keep archives understandable for non-technical relatives'
    ]
  },
  {
    audience: 'Photographers',
    challenge: 'Raw and edited photos from many shoots becoming fragmented and difficult to retrieve quickly.',
    outcome: 'Consistent folder organization that supports faster culling, backup, and client retrieval.',
    highlights: [
      'Use date/location structure for cleaner project organization',
      'Reduce duplicate clutter from export and import cycles',
      'Prepare organized assets for post-processing pipelines'
    ]
  }
];

export const faqs = [
  {
    question: 'What platforms does SnapAtlas support?',
    answer: 'SnapAtlas is a Windows application focused on practical desktop photo-library organization.'
  },
  {
    question: 'Can it handle very large libraries?',
    answer: 'Yes. SnapAtlas is designed for high-volume collections, including DataHoarder-scale archives.'
  },
  {
    question: 'Does SnapAtlas replace my backup system?',
    answer: 'No. It complements your backup strategy by cleaning and organizing source collections first.'
  },
  {
    question: 'Will it remove metadata from my photos?',
    answer: 'No. SnapAtlas is designed around metadata-driven organization, not destructive metadata edits.'
  }
];

export const supportLinks = [
  {
    label: 'Project Repository',
    href: 'https://github.com/XopherX/PhotoOrganizer',
    description: 'Browse source code, releases, and project updates.'
  },
  {
    label: 'Issue Tracker',
    href: 'https://github.com/XopherX/PhotoOrganizer/issues',
    description: 'Report bugs, request features, and follow known issues.'
  },
  {
    label: 'Contact Support',
    href: 'mailto:support@northshoreapps.com',
    description: 'Reach out directly for product questions and troubleshooting.'
  }
];
