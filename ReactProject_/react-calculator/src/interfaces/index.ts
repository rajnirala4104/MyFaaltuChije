export interface ButtonInterface {
      value: string;
      customClassName: string;
}

export interface DialPadInterface {
      theme: string;
      setEquationFunc: React.Dispatch<React.SetStateAction<string>>;
      equation: string;
      setResultValueFunc: React.Dispatch<React.SetStateAction<undefined>>;
}

export interface DisplayScreenInterface {
      equation: string;
      result: number | undefined;
      theme: string;
      equationValue: string;
}