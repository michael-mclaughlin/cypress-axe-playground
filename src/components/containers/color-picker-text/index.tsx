import React from 'react';
import reactCSS from 'reactcss';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import { presetColors } from '../../../utils/preset-colors';

interface Props {
    dataCy: string;
    id: string;
    className: string;
    presetColors?: string[];
}

class ColorPickerText extends React.Component<Props> {
    state = {
        displayColorPicker: true,
        color: {
            r: 45,
            g: 45,
            b: 45,
            a: 1,
        },
    };

    /** Leaving this code here in case we want dynamic rendering in the future */
    // handleClick = () => {
    //     this.setState({ displayColorPicker: !this.state.displayColorPicker });
    // };

    // handleClose = () => {
    //     this.setState({ displayColorPicker: false });
    // };

    handleChange = (color: any) => {
        this.setState({ color: color.rgb });
    };

    render() {
        const styles = reactCSS({
            default: {
                color: {
                    borderRadius: '0.25rem',
                    color: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
            },
        });
        const { children, id, className, dataCy } = this.props;
        return (
            <ParentContainer className="color-picker-parent-container">
                <Container
                    className={`text-color-picker-container ${className}`}
                    id={id}
                    data-cy={dataCy}
                >
                    <ChildContainer style={styles.color}>{children}</ChildContainer>
                    <SketchPicker
                        color={this.state.color}
                        onChange={this.handleChange}
                        className="text-color-picker-sketch"
                        presetColors={presetColors}
                        width={'440px'}
                    />
                </Container>
            </ParentContainer>
        );
    }
}

const ParentContainer = styled.div``;

const Container = styled.div``;

const ChildContainer = styled.div``;

export default ColorPickerText;
