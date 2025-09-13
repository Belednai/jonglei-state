import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Eye, Share2, Tag, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const newsArticles = [
  {
    id: "governor-development-initiatives",
    title: "Governor Announces Major Development Initiatives for 2024",
    excerpt: "New programs targeting healthcare, education, and infrastructure development across Jonglei State",
    content: `
      <p>The Governor of Jonglei State today announced a comprehensive development package worth $12.5 million, aimed at improving essential services and infrastructure across the state. The announcement was made during a press conference at the Governor's Office complex in Bor.</p>
      
      <h3>Key Initiative Areas</h3>
      
      <p>The development package focuses on four critical areas that have been identified as priorities for the state's growth and prosperity:</p>
      
      <h4>Healthcare Infrastructure</h4>
      <p>A significant portion of the budget, $4.2 million, will be allocated to expanding healthcare facilities. This includes the construction of 8 new health centers in rural areas and the upgrade of existing medical facilities. The initiative aims to ensure that no resident is more than 10 kilometers away from a basic healthcare facility.</p>
      
      <h4>Education and Digital Learning</h4>
      <p>The education sector will receive $3.8 million to establish computer labs in 35 schools and implement digital learning platforms. This initiative is part of the state's commitment to preparing students for the digital economy and ensuring equitable access to modern educational resources.</p>
      
      <h4>Rural Infrastructure</h4>
      <p>Road construction and rehabilitation will receive $3.5 million to improve connectivity between rural communities and urban centers. The project will focus on all-weather roads that remain accessible during the rainy season, ensuring year-round access to markets, schools, and healthcare facilities.</p>
      
      <h4>Youth Empowerment</h4>
      <p>The remaining $1 million will support youth skills development programs, including vocational training centers and entrepreneurship support initiatives. These programs are designed to address youth unemployment and create sustainable livelihood opportunities.</p>
      
      <h3>Implementation Timeline</h3>
      
      <p>The implementation of these initiatives will begin in March 2024 and is expected to be completed by December 2025. A dedicated project management unit has been established to oversee the execution and ensure transparency in all activities.</p>
      
      <h3>Community Engagement</h3>
      
      <p>The Governor emphasized the importance of community participation in these initiatives. "These projects are designed with and for our communities. We will continue to engage with local leaders, women's groups, and youth organizations to ensure that the benefits reach everyone," the Governor stated.</p>
      
      <p>Regular progress updates will be provided through the state government website and community meetings. Citizens are encouraged to provide feedback and report any concerns through the established feedback mechanisms.</p>
      
      <h3>Expected Impact</h3>
      
      <p>These initiatives are projected to directly benefit over 150,000 residents across the state. The healthcare expansion alone is expected to reduce infant mortality rates by 25% and improve maternal health outcomes significantly.</p>
      
      <p>The education initiatives will benefit approximately 25,000 students and prepare them for opportunities in the growing digital economy. The infrastructure improvements will enhance trade and commerce, potentially increasing agricultural productivity by 30%.</p>
      
      <p>For more information about these initiatives and how to get involved, citizens can visit the state government offices or contact the dedicated helpline at +211 123 456 789.</p>
    `,
    category: "Government",
    tags: ["Development", "Healthcare", "Education", "Infrastructure"],
    author: "Communications Office",
    publishedDate: "2024-01-20",
    readTime: 5,
    featured: true,
    image: "/api/placeholder/800/400",
    views: 2340,
    relatedArticles: ["healthcare-expansion-update", "youth-skills-program-launch", "digital-education-initiative"]
  }
  // Add more articles as needed
];

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/news/${article.id}`;
  const shareTitle = encodeURIComponent(article.title);
  const shareText = encodeURIComponent(article.excerpt);

  const handleShare = async (platform: string) => {
    let url = '';
    
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'email':
        url = `mailto:?subject=${shareTitle}&body=${shareText}%0A%0A${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(shareUrl);
          // You could add a toast notification here
          return;
        } catch (err) {
          console.error('Failed to copy to clipboard:', err);
          return;
        }
    }
    
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge>{article.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Eye className="h-4 w-4 mr-1" />
                  {article.views} views
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-4">{article.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <span>{article.readTime} min read</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('facebook')}
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('twitter')}
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('email')}
                    aria-label="Share via email"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('copy')}
                    aria-label="Copy link"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video bg-muted rounded-lg mb-8" />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mb-8">
              <Separator className="mb-4" />
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Share this article</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleShare('facebook')}
                    className="flex-1"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleShare('twitter')}
                    className="flex-1"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleShare('email')}
                    className="flex-1"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleShare('copy')}
                    className="flex-1"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Articles */}
            <Card>
              <CardHeader>
                <CardTitle>Recent News</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {newsArticles.slice(0, 5).filter(a => a.id !== article.id).map((recentArticle) => (
                  <div key={recentArticle.id} className="pb-4 border-b last:border-b-0">
                    <h4 className="font-medium mb-2 line-clamp-2">
                      <Link 
                        to={`/news/${recentArticle.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        {recentArticle.title}
                      </Link>
                    </h4>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(recentArticle.publishedDate).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Government", "Health", "Education", "Infrastructure", "Agriculture"].map((category) => {
                    const count = newsArticles.filter(a => a.category === category).length;
                    return (
                      <div key={category} className="flex items-center justify-between">
                        <Link 
                          to={`/news?category=${category.toLowerCase()}`}
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {category}
                        </Link>
                        <Badge variant="outline" className="text-xs">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Subscribe */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest news and updates delivered to your inbox.
                </p>
                <Button className="w-full" asChild>
                  <Link to="/contact">Subscribe to Newsletter</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
    </main>
  );
};

export default NewsDetail;
