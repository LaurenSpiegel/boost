package build

var CurrentCommit string

const BuildVersion = "1.1.0-rc2"

func UserVersion() string {
	return BuildVersion + CurrentCommit
}
