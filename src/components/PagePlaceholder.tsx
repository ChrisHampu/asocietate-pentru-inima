interface PagePlaceholderProps {
  title: string
  description?: string
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="page">
      <div className="container">
        <h1>{title}</h1>
        <p className="page-lead">
          {description ??
            'This page is on its way. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        </p>
      </div>
    </section>
  )
}
