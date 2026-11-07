


interface PromptPageProps {
  params: Promise<{ id: string }>;
}

export default async function PromptPage({ params }: PromptPageProps) {
  return (
    <div className="p-5 flex flex-col w-full h-screen">
      <div className="flex">
        prompt {(await params).id}
      </div>
    </div>
  );
}
