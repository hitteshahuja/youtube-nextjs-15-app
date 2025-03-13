
// File path: /Users/Hittesh.Ahuja/Projects/nextjsprojects/youtube-nextjs-15-app/app/dashboard/users/page.tsx
// Content:
const Page = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div>Users page {id}</div>
    );
}
export default Page;
