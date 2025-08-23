import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import HeroAndGallery from "../components/ImageGrid";
import RippleEffect from "../components/RippleEffect";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/userSlice";
import { fetchIdols } from "../redux/idolSlice";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.user);

  useEffect(() => {
    if (user && user.token && !user.name) {
      // fetch profile if only id exists
      dispatch(fetchUserProfile());
    }
  }, [user, dispatch]);

  useEffect(() => {
    dispatch(fetchIdols());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <RippleEffect />
      <HeroAndGallery />
    </>
  );
}
