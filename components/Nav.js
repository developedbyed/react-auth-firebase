import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">Logo</Link>
      <ul className="flex items-center gap-10">
        <a className="text-lg font-medium" href="#">
          Courses
        </a>
        {!user && (
          <Link href="/auth/login">
            <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
              Join now
            </a>
          </Link>
        )}
        {user && (
          <div>
            <Link href="/dashboard">
              <img
                referrerPolicy="no-referrer"
                className="w-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
