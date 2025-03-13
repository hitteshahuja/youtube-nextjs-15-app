import Link from "next/link";
export default function Page() {
    return (
        <div>
            <div>Dashboard page</div>
            <ul>
                <li>
                    <Link href="/dashboard/users/1">User 1</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/2">User 2</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/3">User 3</Link>
                </li>
            </ul>
        </div>
    );
}