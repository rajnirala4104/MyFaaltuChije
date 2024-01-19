import * as React from "react";

interface CLASS {
  classes: string,
  eventHandler(): void
}

export const NavMenu: React.FC<CLASS> = (props) => {
  return <svg fontSize='2rem' onClick={() => props.eventHandler()} className={props.classes} stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="2rem"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" /></svg>;
}
