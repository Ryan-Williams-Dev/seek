import { useEffect, useRef, useState } from 'react'

export default function AltMap() {

  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap (new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
}