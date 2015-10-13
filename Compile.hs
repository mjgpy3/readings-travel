module Main where

import System.Environment (getArgs)

fillTemplate [] [] = []
fillTemplate (v:[]) ('%':'H':'O':'S':'T':'%':rest) = v ++ fillTemplate [] rest
fillTemplate (v:vs) ('%':'K':'E':'Y':'%':rest) = v ++ fillTemplate vs rest
fillTemplate xs ('\n':rest) = fillTemplate xs rest
fillTemplate xs (c:rest) = c:fillTemplate xs rest

main :: IO ()
main = do
  args <- getArgs
  template <- readFile "readIt.js"
  let outText = "javascript:" ++ fillTemplate args template
  writeFile "out.js" outText
