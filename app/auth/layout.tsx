export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full h-full overflow-hidden grid grid-rows-[auto_1fr_auto] box-border       
        bg-[#f4f7fa]
      dark:bg-gradient-to-t dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 dark:bg-gray-900"
    >
      <div>Header</div>
      {children}
      <div>Footer</div>
    </div>
  );
}
