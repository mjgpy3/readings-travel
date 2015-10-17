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

readConfigFromArgs :: IO Config
readConfigFromArgs = do
  args <- getArgs
  case args of
    [r, k] -> return $ Config { route = r, key = k }
    _ -> error "Usage: ... <route-url> <secret-key>"

main :: IO ()
main = do
  config <- readConfigFromArgs
  template <- readFile "readIt.js"
  let outText = "javascript:" ++ fillTemplate config template
  writeFile "out.js" outText
