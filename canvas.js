(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This extension must run unsandboxed');
    }

    const gradientIcon = `data:image/png;base64,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`
    const drawingIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARhSURBVHgB7d3hbdtWGIbRa6ADeIRskGwQb9COkBGyQdwNskGzQbNB3AmsTCB3AncD9jISEMagZFmSySu+5wBEYIuU+Of5eCUTSikAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMyk67rrfitAlhr+p+6nTwXI8CR+QwBS7IjfEICleyZ+QwCW6sD4DQFYmhfGbwjAUjwT/5e63RoCsEDPxT/YzxCAJTk0/sH+hgAswUvjHxxnCMAlOzb+wfGGAFyiU+MfPI8hAJfkXPEPns8QgEtw7vgHz2sIQMteK/7B8xsC0KLXjn/wOoYAtGSq+AevZwhAC6aOf/C6hgDMaa74B69vCMAc5o5/cB6GAEyplfgH52MIwBRai39wXvuGwJsCnKbV+Lfn9teec/N143CKC47/tgDHEz+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EEj+EqhH9IX4IVUO6Fz8EqiG9ET+EqjHdjAR2X2YkfphIDerjSGSP/cqgzED8MKEa1d87YltPPQTEDxPbht7NPQTEDxPrdn8AOOkQED/MoNv/9/9JhoD4YSY1sM/d4dbnHgLihxnVyL51L7M+1xAQP8ysO8761CEgfphZN34D0LpuX7pXHALihwZ04zcAfd0+9ipDQPzQiG78BqCPg8fPOgTEDw3pNrf7PnXzZJ+zDAHxQ0NqdO/GStyx70lDQPzQmG78BqBve/Y/agiIHxq0I+jPRxyzcwiIHxrVjX8D0O8HHHfoELgXPzSoBni9I8zrA48/ZAiInyb9Vng38rvV1dXVf/sO6jZL+5u67d1vjz/ra9wWmJEBsIn4qX+HP2xXA/2geLvdv98OWiHsIH6aYACU8n7kd6sa/Yeyif59GV8lHOOubOK/K9CAqxKuhv5YTrua79O/PVjV7Xvd7mr4Xws0JHoFUOPvr+znjP+hbK7yffT/1OBXBRqW/hbglKX9L1f3srnCH/uBIMwifQDcvGDfh/Lz6v7d+3iWIH0AvN3z2I9l/Pbf/ur+UGBhYj8E3P5p73H7Y790v9tu/ZJ+ZTkPC9ZtvgL8QzfT//gDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALBM/wPXC1iyt4w0VwAAAABJRU5ErkJggg==`
    const pathIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkYSURBVHgB7d3ddRs3FgDgy5wU4FQQpgLLFazSgVOBtRXYqcBMBYkrsFNB0oGUCqRUQKYCeSvAApnR8c9amxlKHBLA952DIz+MRD74Xlz8DBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcaxVQmZTSk/zjLLfnuX07/rtYf/TY+9x2Y/szt6vcblar1fsA6lKCPreL3C5zu037u8ztRQCnbwz81w8M+i/Zjn93HcDpycH58gCB/6VE8CqA01B65dyu07K2STUAx5WD8EU6fK9/n/K5qgE4hjSMyU/B6wCWk04n+O9IArCEdHrBf0cSgENKw0z/KWt6z4CdgBxNGmbdr3N7Eqer7Bx8tlqtdtEgCYCjyQlgG59u3z1VZQvxs2jQVwFHkIP/ZdQR/MVZanR5UAXA4sbS/zLqSQBFGQp819rLRCoAjqFMrK2jLmWeorkqQAXA4ioa+3+uuSpABcCicvBfRJ3BX5Qq4Hk0RAJgabWvqze1L8AQgMWk4SSf26hbU8MAFQBLOov63R1H1gQJgCWdRxuamQeQAFjS02jDOhohAbCkdbShlUQmAbCodXBSrAKwmPJubTQirwI0ETsqAOiYBAAdkwBY0i7a4F0A6NguGiEBsKSbaMNf0QgJgCW1EjitJDIJgEX9Hm24ikbYB8BixrcBy2Egp3wK8BTfeBsQZhqDpvby+cqJQLC/X6Nu76IhhgAsqvJhwC73/t9FQ1QALGosn99EnWqvXv6HBMAx1LgasIvGyv9CAmBR42Wbl1GfNy3eD2gOgEWMY/+fc7uI+jQ39r/zdcCB5eA/zz/eRr2XgXwfjTIE4KBy8Jdev7Z7AD/2U6tXg8PBlAtAc7tOddsEME8OnJe53aa6bQKYLg29/mWq3yaA6XLQPE8P7/W3ub1Ox6seyudeBDBNDpgnuf2cHu5dGpYK7yqJbVpWma9YBzBNDpizRwjU0uu+uufvv0qHTwT3fj5wjzRM9D3UZfqHXjcN1cAmPX4iuB3/bu1nE8Cy0uOU/LN73fw7F+lhk4y34++XvyPww1ZgZhiD5rd42C2/u9x+WK1Wex8MMn6Ps/F7lHv61mN78tnnFOVzylmE5QWkm5YO84DFpMfZ2POLnhcqkx4+K79Nw/sAQE0eIfh/0+tDhdKwxr9v2W95DWo29t77sKkGapaGLbn7MNEHNUv7b/JR8kPN0jDpt4+LAOqVhkm/bZqnTPadBVC3tN8WX8EPtcuBfJ7muwigfml+6b8JoH5p/pLfLwHUL82f9d8G0IY0HMU1VZnxXwdQvz16fxt9oBUze//rANqwR++/DqANM3v/twG0I81b918H0IY0nIqr94cepXlHa68DaEOaN/mn92/cV0Fvzmc8+yaAdswo/637Q0vScODHVC+C5hkC9OV8xrN/BM2TAPpyPvG5cofeLmieBNCXpxOf0/tDa2aM/8+DLqgAOpHmHd6599Xd1EUC6Md64nNl/P8+6IIE0I+pFcBfQTckgH6sJz6n/O+IBNCPbyc+ZwdgRySAfky9sfc/QTckgH5MTQC7oBsSQD+mJgArAB1ZBV0ou3umPJeXAP2f6IgKADomAUDHJADomAQAHZMAoGMSAHRMAoCOSQDQMQkAOiYBQMckAOiYBAAdkwCgYxIAdEwCgI5JANAxCQA6JgFAxyQA6JgEAB2TAKBjEgB0TALoQEppPfFRdwJ0RgLog0tB+CIJoA+uBeOLJIA+rCc+52LQzkgAfVhPfG4XdEUC6MPTic/tgq5IAH04m/jcTQDtKEuAabqpk4U0QgXQvqm9//vVamUZsDMSQPueT3zuj6A7EkD7/jXxuaugOxJAw/KY/jymLwGaAISW5ATwbuLk3zbokgqgbcp//i8JoFG5V7+I6eX/7wG0IyeAy4nl/20A7chBfZamextAO2ZM/hXnAbRhZu9v9h9akoP6ekYCeBFAG3JAX8wIfr0/tCINb/1tZySATQBtSPMm/rZp+knBwClL80r/wtgfWpCG0v92RvAb+0MLcjA/SfPG/Xp/PvF18Ik0HItVTtEpB2l8Gx9O1Fl/9Fg5OWc3tj9jeJnm5ggn6ryN6fv9i3f5O/4awAdjT1rG0Zczy+nPXS7Vw+bP+TnNs00m/uCDMfBfPzDo7wu214cKuPFvz6X0hzs5IF6mxw/8z21zexWPKO0X/F74gSINs+Zztss+hm16hGqgBHKab5sc9w1/B9CLdPhe/z7lc/eqBtIwVLlM85XPXAf0Lu1XOh/C65nfu7zdt037mXokOLQrnU7w35mUBNLD5ik2Ab1Lpxf8d17/w/eeu8z3sU1A79LQg56yF1/4zg+dpNwE9C7N3yN/DJ9M0uV/n6f9x/vFJoC/g2mb6nA9ft+HViubAKoo/T/30H0Jj7rZiH6sojFpKKkvY95LMrUqLx/9sFqtrgL20OLNQGVibR3tK5d5PhP8PESLCeAi2vcmt+9z8O8CHqCp8wDSvPvwavVjDvxfAh5BaweCtPzK6y6G8f5NwCNpZhIwDW+8tXrR5VVu/1by89hamgM4iza9yYFvvM9BtJQAzqMtZYmv9PrW+DmYluYAnkY7dmG8zwJaSgDraEPp+Z8d4YRhOtTSEGAdbXgv+FlKS6sAKRqRE0BzW7Q5TS3uBAQmkgCgYy0lgF20wfifxagATs8uYCEtJYBW1sz/ClhISwmglcCx+YfFtJQAfo82XAUspLW3Abe51X4P3jc2ArGUZiqAMWhqL5+vBD9Lam0V4Neo27uABTW15bTyYcAu9/7fBSyoqQpgLJ/fRJ1qr16oUIv3AtRYBezCKb8cQXM7Accq4KeoyxvBzzE0+9ppGu7cq+GcQGN/jqbldwF+iNN/saZ8v+8DjqTZBDCW1D/GaftJ6Q8HlIcCm3SaNgEcXjq9JLAJYDnpdJLAJoDl5eB7ldttOo7yuRcBHE8OwnVu27Ss6/K5AZyGNFQD23RYpdd3tRecojRUA5sDJILb8e/WfjYB9CEH60Vul2l/t+PvXwh8auEGms+MwVu2EJ/HcOHoemwfB/Vu/FkOIClnEZbjyG4c5gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQgv8CREFaCNv2IL8AAAAASUVORK5CYII=`
    const textIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP1SURBVHgB7d3hjRtFGMfh14jvHBWcS0gHpBTogA4QFUAHhAqACuJUwKUCTAemAjNWNgIpUnKXfcf2+f880mjt+2LJsn+7M+OzqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBJNsWjHI/Hb8fhl+LqbYbiUb4oIJYAQDABgGACAMEEAIJ9Wcx2GGM/xsMY/yz3a/nbbD+Msa113ozxqubbLsf75fbdGC8KrsFpG/D4dD+PcVcXMh779XG9i219jsfejvHX8YmKRzMFmOfV2I7+foxD8VnGc7cfh++KaQRgnl+L1UYEduOwK6YQgDn2ywuXHj8WUwjAHLui00MxhQDM8XvRZllH2RXtBGCOt0W3P4p2AtDvYVm9ppdpwAQC0O9N0W5ZVLWl2kwA+pn/z2Ma0EwAeh1s/021K1oJQC+X/3O5umomAL1+K6ZZtgMtBjYSgF6uAObzHDcSgD57239nYRrQSAD67IpzOE0BbAc2EYA+zkxnYB2glwD0MTc9H58HaCIAPXa++OOsXG01EYAezkhntCy27ovVBKCHOen5iW4DAVjPt/9chug2EID1/O//ZVgHaCAA6/n47wX4lqAeArCe7b/L8dyv5JeBHm9fH/5CzsHHfy/qNA24L+BDz/2XgZjPFACCCQAEEwAIJgAQTAAgmABAMAGAYAIAwQQAggkABBMACCYAEEwAIJgAQDABgGACAMEEAIIJAAQTAAgmABBMACCYAEAwAYBgAgDBBACCCQAEEwAIJgAQTAAgmABAMAGAYAIAwQQAggkABBMACCYAEEwAIJgAQDABgGACAMEEAIIJAAQTAAgmABBMACCYAEAwAYBgAgDBBACCCQAEEwAIJgAQTAAgmABAMAGAYAIAwQQAggkABBMACCYAEEwAIJgAQDABgGACAMEEAIIJAAQTAAgmABBMACCYAEAwAYBgAgDBBACCCQAEEwAIJgAQTAAgmABAMAGAYAIAwQQAggkABBMACCYAEEwAIJgAQDABgGACAMEE4LZtCz5CACCYAPApXxc3SwBu27bW+6q4WQJwo47H41312BY3SwBu14vqsW2MCTDb6Q07xp/HPj8VN2lTPFvLmfk0tv8b39S7s3/3Wfswxm6Mt2M8LPf3m81mXzxbAnDFljf4y/rvTX6/3H7/Br+WS/NTDN5H4e/luK93gdgVV0sArtgIwMtxeF3P2AiA19gVswgIwQQAggkABBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACux7/j+LRCYdIzFgAAAABJRU5ErkJggg==`
    const movementIcon = `data:image/png;base64,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`

    const canvas = document.createElement('canvas');

    canvas.width = 480;
    canvas.height = 360;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    Scratch.renderer.addOverlay(canvas);

    const context = canvas.getContext('2d');

    // Scratch's coordinate system differs from canvas's 0,0 origin at the top left

    function convertX(x) { return x + centerX };

    function convertY(y) { return centerY - y };

    // Work in progress, it doesn't work quite right currently
    function convertAngle(a) {
        return (90 - a) * Math.PI / 180;
    }

    // Session storage for gradients and paths
    const gradients = new Map();
    const paths = new Map();

    class Canvas {
        getInfo() {
            return {
                id: 'canvas',
                name: 'Canvas.sb3',
                blocks: [
                    {
                        opcode: 'clear',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'clear canvas'
                    },
                    {
                        opcode: 'save',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'save settings'
                    },
                    {
                        opcode: 'restore',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'restore settings'
                    },
                    {
                        opcode: 'fill_style',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set [F] style to [S]',
                        arguments: {
                            F: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'STYLE'
                            },
                            S: {
                                type: Scratch.ArgumentType.COLOR
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'create_gradient',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'gradient with name [N] from x: [X0] y: [Y0] to x: [X1] y: [Y1]',
                        blockIconURI: gradientIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new gradient'
                            },
                            X0: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y0: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            X1: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y1: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    {
                        opcode: 'delete_gradient',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'delete gradient with name [N]',
                        blockIconURI: gradientIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new gradient'
                            }
                        }
                    },
                    {
                        opcode: 'add_gradient_stop',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'add color stop for gradient [N] at [P] with color [C]',
                        blockIconURI: gradientIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new gradient'
                            },
                            P: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            C: {
                                type: Scratch.ArgumentType.COLOR
                            }
                        }
                    },
                    {
                        opcode: 'get_gradient',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'gradient [N]',
                        blockIconURI: gradientIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new gradient'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'rectangle',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '[F] rectangle at x: [X] y: [Y] with width: [W] height: [H]',
                        blockIconURI: drawingIcon,
                        arguments: {
                            F: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'STYLE'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            W: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            H: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }

                    },
                    '---',
                    {
                        opcode: 'fill_stroke',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '[F] path [N]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            },
                            F: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'STYLE'
                            }
                        }
                    },
                    {
                        opcode: 'create_path',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'create path [N]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            }
                        }
                    },
                    {
                        opcode: 'close_path',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'close path [N]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            }
                        }
                    },
                    {
                        opcode: 'delete_path',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'delete path [N]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            }
                        }
                    },
                    {
                        opcode: 'move_to',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'move [N] to x: [X] y: [Y]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    {
                        opcode: 'line_to',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'line on [N] to x: [X] y: [Y]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    {
                        opcode: 'bezier_curve_to',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'bezier curve on [N] to x: [X] y: [Y] with control point x: [PX1] y: [PY1] and x: [PX2] y: [PY2]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            PX1: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            PY1: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            PX2: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            PY2: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    {
                        opcode: 'quadratic_curve_to',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'quadratic curve on [N] to x: [X] y: [Y] with control point x: [PX1] y: [PY1]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            PX1: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            PY1: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    // Add clockwise / counter-clockwise
                    {
                        opcode: 'arc',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'draw arc on [N] at x: [X] y: [Y] with radius [R] start angle [SA] end angle [EA]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            R: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            SA: {
                                type: Scratch.ArgumentType.ANGLE
                            },
                            EA: {
                                type: Scratch.ArgumentType.ANGLE
                            }
                        }
                    },
                    {
                        opcode: 'arc_to',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'draw arc on [N] at x: [X] y: [Y] to x: [X1] y: [Y1] with radius [R] counter-clockwise [D]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            X1: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y1: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            R: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            D: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'TRUE_FALSE'
                            }
                        }
                    },
                    {
                        opcode: 'is_point_in_path',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'is point x: [X] y: [Y] in [N]',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    {
                        opcode: 'is_point_in_path_stroke',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'is point x: [X] y: [Y] in [N] stroke',
                        blockIconURI: pathIcon,
                        arguments: {
                            N: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'new path'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'set_font',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set font to [F] with size [S]',
                        blockIconURI: textIcon,
                        arguments: {
                            F: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'FONT_SYSTEM'
                            },
                            S: {
                                type: Scratch.ArgumentType.NUMBER,
                            }
                        }
                    },
                    {
                        opcode: 'set_text_align',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'align text [A]',
                        blockIconURI: textIcon,
                        arguments: {
                            A: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'TEXT_ALIGN'
                            }
                        }
                    },
                    {
                        opcode: 'set_text_baseline',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'text baseline [B]',
                        blockIconURI: textIcon,
                        arguments: {
                            B: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'TEXT_BASELINE'
                            }
                        }
                    },
                    {
                        opcode: 'set_text_direction',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'text direction [D]',
                        blockIconURI: textIcon,
                        arguments: {
                            D: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'DIRECTION'
                            }
                        }
                    },
                    {
                        opcode: 'get_text_width',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'get width of [T]',
                        blockIconURI: textIcon,
                        arguments: {
                            T: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Garfield'
                            }
                        }
                    },
                    {
                        opcode: 'draw_text',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '[F] text [T] at x: [X] y: [Y]',
                        blockIconURI: textIcon,
                        arguments: {
                            F: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'STYLE'
                            },
                            T: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Garfield'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    /*'---',
                    {
                        opcode: 'rotate_space',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'rotate coordinate space by [D] degrees',
                        blockIconURI: movementIcon,
                        arguments: {
                            D: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },
                    {
                        opcode: 'translate_space',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'translate coordinate space to x: [X] y: [Y]',
                        blockIconURI: movementIcon,
                        arguments: {
                            X: {
                                type: Scratch.ArgumentType.NUMBER
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER
                            }
                        }
                    },*/
                ],
                menus: {
                    TRUE_FALSE: {
                        acceptReporters: true,
                        items: ['true', 'false']
                    },
                    STYLE: {
                        acceptReporters: true,
                        items: ['fill', 'stroke']
                    },
                    TEXT_ALIGN: {
                        acceptReporters: true,
                        items: [
                            'left',
                            'right',
                            'center',
                            'start',
                            'end'
                        ]
                    },
                    TEXT_BASELINE: {
                        acceptReporters: true,
                        items: [
                            'top',
                            'hanging',
                            'middle',
                            'alphabetic',
                            'ideographic',
                            'bottom'
                        ]
                    },
                    DIRECTION: {
                        acceptReporters: true,
                        items: [
                            'ltr',
                            'rtl',
                            'inherit'
                        ]
                    },
                    FONT_SYSTEM: {
                        acceptReporters: true,
                        items: [
                            'Arial',
                            'Helvetica',
                            'Times New Roman',
                            'Times',
                            'Courier New',
                            'Courier',
                            'Verdana',
                            'Georgia',
                            'Palatino',
                            'Garamond',
                            'Bookman',
                            'Comic Sans MS',
                            'Trebuchet MS',
                            'Impact'
                        ]
                    },
                    // To be added soon
                    BLENDING: {
                        acceptReporters: true,
                        items: [
                            // Default
                            'source-over',

                            // Source compositing
                            'source-in',
                            'source-out',
                            'source-atop',

                            // Destination compositing
                            'destination-over',
                            'destination-in',
                            'destination-out',
                            'destination-atop',

                            // Lighter / copy
                            'lighter',
                            'copy',
                            'xor',

                            // Blend modes
                            'multiply',
                            'screen',
                            'overlay',
                            'darken',
                            'lighten',
                            'color-dodge',
                            'color-burn',
                            'hard-light',
                            'soft-light',
                            'difference',
                            'exclusion',
                            'hue',
                            'saturation',
                            'color',
                            'luminosity'
                        ]
                    }
                }

            };
        }
        rectangle(args) {
            if (args.F === 'fill') {
                context.fillRect(
                    convertX(args.X) - (args.W / 2),
                    convertY(args.Y) - (args.H / 2),
                    args.W,
                    args.H
                );
            } else {
                context.strokeRect(
                    convertX(args.X) - (args.W / 2),
                    convertY(args.Y) - (args.H / 2),
                    args.W,
                    args.H
                );
            }
        }

        clear(args) {
            context.clearRect(0, 0, width, height);
        }

        save() {
            context.save();
        }

        restore() {
            context.restore();
        }

        fill_style(args) {
            if (args.F === 'fill') {
                context.fillStyle = args.S;
            } else {
                context.strokeStyle = args.S;
            }
        }

        // Gradients

        create_gradient(args) {
            gradients.set(
                args.N,
                context.createLinearGradient(
                    convertX(args.X0),
                    convertY(args.Y0),
                    convertX(args.X1),
                    convertY(args.Y1)
                )
            );
        }

        delete_gradient(args) {
            gradients.delete(args.N);
        }

        add_gradient_stop(args) {
            const gradient = gradients.get(args.N);
            if (!gradient) { return };

            gradient.addColorStop(
                args.P,
                args.C
            );
        }

        get_gradient(args) {
            return gradients.get(args.N);
        }
        
        // Paths

        fill_stroke(args) {
            const path = paths.get(args.N);
            if (!path) { return };

            if (args.F === 'fill') {
                context.fill(path);
            } else {
                context.stroke(path);
            }
        }

        create_path(args) {
            paths.set(
                args.N,
                new Path2D()
            );
        }

        delete_path(args) {
            paths.delete(args.N);
        }

        close_path(args) {
            const path = paths.get(args.N);
            if (!path) { return };
            path.closePath();
        }

        move_to(args) {
            const path = paths.get(args.N);
            if (!path) { return };
            path.moveTo(
                convertX(args.X),
                convertY(args.Y)
            );
        }

        line_to(args) {
            const path = paths.get(args.N);
            if (!path) { return };
            path.lineTo(
                convertX(args.X),
                convertY(args.Y)
            );
        }

        bezier_curve_to(args) {
            const path = paths.get(args.N);
            if (!path) { return };
            path.bezierCurveTo(
                convertX(args.PX1),
                convertY(args.PY1),
                convertX(args.PX2),
                convertY(args.PY2),
                convertX(args.X),
                convertY(args.Y)
            );
        }

        quadratic_curve_to(args) {
            const path = paths.get(args.N);
            if (!path) { return };
            path.quadraticCurveTo(
                convertX(args.PX1),
                convertY(args.PY1),
                convertX(args.X),
                convertY(args.Y)
            );
        }

        // Still need to work on convertAngle(), the conversion isn't quite right yet 
        arc(args) {
            const path = paths.get(args.N);
            if (!path) { return };
            path.arc(
                convertX(args.X),
                convertY(args.Y),
                args.R,
                convertAngle(args.SA),
                convertAngle(args.EA),
                Scratch.Cast.toBoolean(args.D)
            );
        }

        arc_to(args) {
            const path = paths.get(args.N);
            if (!path) { return };
            path.arcTo(
                convertX(args.X),
                convertY(args.Y),
                convertX(args.X1),
                convertY(args.Y1),
                args.R
            );
        }

        is_point_in_path(args) {
            const path = paths.get(args.N);
            if (!path) { return false };
            return context.isPointInPath(
                path,
                convertX(args.X),
                convertY(args.Y)
            )
        }

        is_point_in_path_stroke(args) {
            const path = paths.get(args.N);
            if (!path) { return false };
            return context.isPointInStroke(
                path,
                convertX(args.X),
                convertY(args.Y)
            )
        }

        // Fonts

        set_font(args) {
            context.font = `${args.S}px "${args.F}"`;
        }

        set_text_align(args) {
            context.textAlign = args.A;
        }

        set_text_baseline(args) {
            context.textBaseline = args.B;
        }

        set_text_direction(args) {
            context.direction = args.D;
        }

        get_text_width(args) {
            return context.measureText(args.T).width;
        }

        draw_text(args) {
            if (args.F === 'fill') {
                context.fillText(
                    args.T,
                    convertX(args.X),
                    convertY(args.Y)
                );
            } else {
                context.strokeText(
                    args.T,
                    convertX(args.X),
                    convertY(args.Y)
                );
            }
        }

        // Translations

        // These need serious work because they affect functions such as clear()
        /*rotate_space(args) {
            context.rotate(convertAngle(args.D));
        }

        translate_space(args) {
            context.translate(
                args.X,
                -args.Y
            )
        }*/
    }
    Scratch.extensions.register(new Canvas());
})(Scratch);
