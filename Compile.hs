module Main where

import System.Environment (getArgs)

data Config = Config {
  route :: String,
  key :: String
}

fillTemplate _ [] = []
fillTemplate config ('%':'H':'O':'S':'T':'%':rest) = route config ++ fillTemplate config rest
fillTemplate config ('%':'K':'E':'Y':'%':rest) = key config ++ fillTemplate config rest
fillTemplate config ('\n':rest) = fillTemplate config rest
fillTemplate config (c:rest) = c:fillTemplate config rest

main :: IO ()
main = do
  [r, k] <- getArgs
  template <- readFile "readIt.js"
  let outText = "javascript:" ++ fillTemplate (Config { route = r, key = k }) template
  writeFile "out.js" outText
