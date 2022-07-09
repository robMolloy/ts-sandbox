interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  return arg;
}

loggingIdentity({ length: 3 });
