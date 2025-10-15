import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import type { Blog } from "@shared/schema";
import { format } from "date-fns";

export default function BlogDetail() {
  const { slug } = useParams();
  
  const { data: blog, isLoading, error } = useQuery<Blog>({
    queryKey: ["/api/blogs", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-muted rounded w-1/4" />
              <div className="h-12 bg-muted rounded w-3/4" />
              <div className="aspect-video bg-muted rounded" />
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-6">Blog Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12 md:py-20">
        <article className="max-w-4xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            {blog.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" data-testid="text-blog-title">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}</span>
            </div>
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              <Tag className="w-5 h-5 text-muted-foreground" />
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="text-sm bg-muted px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="aspect-video overflow-hidden rounded-xl mb-12">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
              data-testid="img-blog-hero"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {blog.excerpt}
            </p>
            <div 
              className="space-y-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
              data-testid="text-blog-content"
            />
          </div>

          <div className="border-t pt-8">
            <Link href="/blog">
              <Button variant="outline" data-testid="button-back-bottom">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
